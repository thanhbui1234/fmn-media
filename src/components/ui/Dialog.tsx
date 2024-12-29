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
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type DialogCustomProps = {
  triggerText?: string;
  title?: string; // Không bắt buộc nữa vì có thể truyền children
  description?: string; // Không bắt buộc nữa
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
  onCancel?: () => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showFooter?: boolean;
  children?: React.ReactNode; // Thêm children
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
  showFooter = false,
  children,
}: DialogCustomProps) => {
  return (
    <AlertDialog  open={open} onOpenChange={onOpenChange}>
      {/* Trigger Button (Chỉ hiển thị nếu có triggerText) */}
      {triggerText && (
        <AlertDialogTrigger className="btn-primary">
          {triggerText}
        </AlertDialogTrigger>
      )}
      <AlertDialogContent className="mr-5">
        {children ? (
          <>
            {/* Đảm bảo có AlertDialogTitle, nhưng có thể ẩn nếu không cần */}
            <VisuallyHidden>
              <AlertDialogTitle>Hidden Title</AlertDialogTitle>
            </VisuallyHidden>
            {children}
          </>
        ) : (
          <>
            <AlertDialogHeader>
              {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
              {description && (
                <AlertDialogDescription>{description}</AlertDialogDescription>
              )}
            </AlertDialogHeader>
            {showFooter && (
              <AlertDialogFooter>
                <AlertDialogCancel onClick={onCancel}>
                  {cancelText}
                </AlertDialogCancel>
                <AlertDialogAction onClick={onAction}>
                  {actionText}
                </AlertDialogAction>
              </AlertDialogFooter>
            )}
          </>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};