import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type DialogCustomProps = {
  triggerText?: string;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
  onCancel?: () => void;
  open?: boolean; // Trạng thái mở/đóng dialog
  onOpenChange?: (open: boolean) => void; // Callback khi trạng thái thay đổi
  showFooter?: boolean;
};

export const DialogCustom = ({
  triggerText,
  title,
  description,
  cancelText = "Cancel",
  actionText = "Continue",
  onAction,
  onCancel,
  open,
  onOpenChange,
  showFooter =false ,
}: DialogCustomProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      {/* Trigger Button (Chỉ hiển thị nếu có triggerText) */}
      {triggerText && (
        <AlertDialogTrigger className="btn-primary">
          {triggerText}
        </AlertDialogTrigger>
      )}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        {showFooter && (
            <AlertDialogFooter>
                <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>
                <AlertDialogAction onClick={onAction}>{actionText}</AlertDialogAction>
            </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};
