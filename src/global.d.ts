// Declaramos la extensión de la interfaz Window
declare global {
  interface Window {
    goTo: (screenId: string) => void;
  }
}

export {};