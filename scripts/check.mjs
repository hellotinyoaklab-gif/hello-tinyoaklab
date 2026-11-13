import { readFile, stat } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';

const root = new URL('../public/', import.meta.url);
const html = await readFile(new URL('index.html', root), 'utf8');
const css = await readFile(new URL('styles.css', root), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs must be unique');
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(target), `Missing anchor ${target}`);
}
const localPaths = new Set([...`${html}\n${css}`.matchAll(/(?:href="|src="|content="|url\(')(\/[\w./-]+)["']/g)].map((match) => match[1]));
for (const file of localPaths) {
  assert.ok((await stat(new URL(file.slice(1), root))).isFile(), `Missing asset ${file}`);
}
assert.ok(html.includes('https://play.google.com/store/apps/details?id=com.lookpiko.app'));
assert.ok(html.includes('https://www.youtube.com/watch?v=Aa3u10MzEEs'));
execFileSync(process.execPath, ['--check', 'public/studio.js'], { stdio: 'inherit' });
console.log(`Verified ${localPaths.size} local assets, navigation targets, LookPiko links, and JavaScript syntax.`);
