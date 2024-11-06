export interface Controller {
  onUp(listener: () => any): void;
  onDown(listener: () => any): void;
  onRight(listener: () => any): void;
  onLeft(listener: () => any): void;

  onReleaseUp(listener: () => any): void;
  onReleaseDown(listener: () => any): void;
  onReleaseRight(listener: () => any): void;
  onReleaseLeft(listener: () => any): void;
}
