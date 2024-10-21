import { default as React } from 'react';
interface EmailCardProps {
    email: string;
    onClose: () => void;
}
declare const EmailCard: React.FC<EmailCardProps>;
export default EmailCard;
