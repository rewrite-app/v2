import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/shadcn/components/ui/dialog";

const RewriteDialog = ({ Trigger, title, children }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Trigger/>
            </DialogTrigger>
            <DialogContent className="">
                <DialogHeader>
                    <DialogTitle className={'mb-2'}>{title ? title : 'Footnote'}</DialogTitle>
                    {children}
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default RewriteDialog;
