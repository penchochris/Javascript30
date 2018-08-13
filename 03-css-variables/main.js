const controls = document.querySelectorAll('.control');

function handleUpdate () {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

controls.forEach(control => control.addEventListener('input', handleUpdate));