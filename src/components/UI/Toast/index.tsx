import { toast, ToastContent, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'components/UI/Toast/styles.scss'
import { loc } from "../../../utils/i18n"
import { t } from "@lingui/macro"


export const toaster = {
    error: (content: ToastContent = loc._(t`basic.success.request.error`), options?: ToastOptions) => toast.error(content, options),
    warn: (content: ToastContent, options?: ToastOptions) => toast.warn(content, options),
    success: (content: ToastContent = loc._(t`basic.success.request.create`), options?: ToastOptions) => toast.success(content, options),
    info: (content: ToastContent, options?: ToastOptions) => toast.info(content, options),
    dismiss: (id?: string) =>  toast.dismiss(id)
}
