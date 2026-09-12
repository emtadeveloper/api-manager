import type { ReactNode } from "react";
import { Modal } from "antd";

interface BaseModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export default function BaseModal({
  open,
  title,
  onClose,
  children,
}: BaseModalProps) {
  return (
    <Modal open={open} title={title} onCancel={onClose} footer={null} centered>
      {children}
    </Modal>
  );
}
