export interface ILocationError {
  showError: boolean;
  message?: string;
}

export const emptyLocationError = {
  showError: false,
  message: undefined,
};
