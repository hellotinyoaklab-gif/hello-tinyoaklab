const form = document.getElementById('project-form');

if (form) {
  form.hidden = false;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const brief = String(data.get('brief') || '').trim();
    const briefField = document.getElementById('project-brief');
    if (!brief) {
      briefField.setCustomValidity('Please add a few words about your project.');
      briefField.reportValidity();
      return;
    }
    const subject = encodeURIComponent(`Tiny Oak Lab inquiry: ${data.get('type')}`);
    const body = encodeURIComponent(`Hello Tiny Oak Lab,\n\n${brief}\n\nThanks!`);
    document.getElementById('form-note').textContent = 'If the draft doesn’t open, use the email address beside the form.';
    window.location.href = `mailto:hello.tinyoaklab@gmail.com?subject=${subject}&body=${body}`;
  });
  document.getElementById('project-brief').addEventListener('input', (event) => {
    event.target.setCustomValidity('');
  });
}
