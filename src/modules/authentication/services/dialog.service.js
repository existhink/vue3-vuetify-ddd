// Vue Router
import { useRouter } from 'vue-router';

// Composable
import useAppDialog from '@/modules/app/composable/useAppDialog';

export const useAuthenticationDialogService = () => {
  const { dialog, dialog_showDialog, dialog_closeDialog } = useAppDialog();
  const router = useRouter();

  /**
   * @description Open Dialog Success - Login
   *
   * @return {void} void
   */
  const onOpenDialogSuccessLogin = () => {
    dialog_showDialog({
      okBtnText: 'Kembali',
      title: 'Berhasil',
      description: 'Selamat anda berhasil login kedalam akun anda. Selamat datang di Joven.id',
    });
  };

  /**
   * @description Open Dialog Success - Registration
   *
   * @return {void} void
   */
  const onOpenDialogSuccessRegistration = () => {
    dialog_showDialog({
      okBtnText: 'Kembali',
      title: 'Berhasil',
      description: 'Anda telah berhasil membuat akun. Selamat datang di Joven.id',
    });
  };

  /**
   * @description Open Dialog Success - Forgot Password
   *
   * @return {void} void
   */
  const onOpenDialogSuccessForgotPassword = () => {
    dialog_showDialog({
      okBtnText: 'Kembali',
      title: 'Berhasil',
      description: 'Silakan cek email Anda untuk melakukan proses ganti password Anda',
    });
  };

  /**
   * @description On Close Dialog Success - Registration
   *
   * @return {void}
   */
  const onCloseDialogSuccessRegistration = () => {
    dialog_closeDialog();
    router.push({ name: 'authenticationLogin' });
  };

  /**
   * @description On Close Dialog Success - Login
   *
   * @return {void}
   */
  const onCloseDialogSuccessLogin = () => {
    dialog_closeDialog();
    router.push({ name: 'dashboard' });
  };

  return {
    dialog,
    onCloseDialogSuccessLogin,
    onCloseDialogSuccessRegistration,
    onOpenDialogSuccessForgotPassword,
    onOpenDialogSuccessLogin,
    onOpenDialogSuccessRegistration,
  };
};
