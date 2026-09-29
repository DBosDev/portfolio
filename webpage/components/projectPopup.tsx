"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/modal";
import { normalText, subtitle } from "./primitives";
import Image from "next/image";
import { Button } from "@heroui/button";
import { GithubIcon } from "./icons";
import NextLink from "next/link";

export default function ProjectPopup({ open, onOpenChange, gitlink, title, translations, image }: { open: boolean, onOpenChange: () => void, gitlink: string, title: string; translations: string; image?: string }) {
    return (
        <Modal isOpen={open} onOpenChange={onOpenChange} size="3xl">
            <ModalContent>
                <ModalHeader className="flex items-center space-x-2 ">
                    <h2 className={subtitle({ fullWidth: false })}>
                        {title}
                    </h2>
                    <Button href={gitlink} isIconOnly as={NextLink} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-6 h-6" />
                    </Button>
                </ModalHeader>
                <ModalBody>
                    <p className={normalText({ size: "sm" })}>
                        {translations}
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