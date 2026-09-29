"use client"

import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { subtitle } from "./primitives";
import Image from "next/image";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useDisclosure } from "@heroui/modal";
import ProjectPopup from "./projectPopup";

export default function ProjectCard({ title, gitlink, translations, image }: { title: string; gitlink: string; translations: string; image?: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <ProjectPopup open={isOpen} onOpenChange={onOpenChange} gitlink={gitlink} title={title} translations={translations} image={image} />
            <Card className="mt-6 p-6">
                <div className="flex items-center space-x-2">
                    <h2 className={subtitle({ fullWidth: false })}>
                        {title}
                    </h2>
                    <Button onPress={onOpen} isIconOnly>
                        <Bars3Icon className="w-6 h-6" />
                    </Button>
                </div>
                {image && (
                    <Image
                        className="mt-4 border-1 border-white rounded-lg"
                        alt={title}
                        height={300}
                        src={`/images/${image}`}
                        width={500}
                    />
                )}
            </Card>
        </div>
    );
}