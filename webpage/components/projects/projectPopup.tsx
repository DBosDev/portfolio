"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/modal";
import { normalText, subtitle } from "../primitives";
import Image from "next/image";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { HugeiconsIcon } from "@hugeicons/react";
import { Github01Icon } from "@hugeicons/core-free-icons";

export default function ProjectPopup({ open, onOpenChange, gitlink, title, translations, image }: { open: boolean, onOpenChange: () => void, gitlink: string, title: string; translations: string; image?: string }) {
    const t = useTranslations("Projects");
    
    return (
        <Modal isOpen={open} onOpenChange={onOpenChange} size="3xl">
            <ModalContent>
                <ModalHeader className="flex items-center space-x-2 ">
                    <h2 className={subtitle({ fullWidth: false })}>
                        {title}
                    </h2>
                    <Button href={gitlink} isIconOnly as={NextLink} target="_blank" rel="noopener noreferrer">
                        <HugeiconsIcon icon={Github01Icon} className="w-6 h-6" />
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <p className={normalText({ size: "sm" })}>
                        {t("projects." + translations)}
                    </p>
                    {image && (
                        <Image
                            className="m-auto mt-4 mb-4 border-1 border-white rounded-lg"
                            alt={title}
                            height={300}
                            src={`/images/${image}`}
                            width={500}
                        />
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}