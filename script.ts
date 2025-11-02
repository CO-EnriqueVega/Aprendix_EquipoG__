function goTo(screenId: string): void {
  console.log('goTo called with', screenId);
  const screens: NodeListOf<HTMLElement> = document.querySelectorAll(".screen");
  screens.forEach((s: HTMLElement) => s.classList.remove("active"));

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
    console.log('activated', screenId);
  } else {
    console.warn(`Elemento con id "${screenId}" no encontrado.`);
  }
}

(window as any).goTo = goTo;