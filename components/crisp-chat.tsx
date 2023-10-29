"use client";
import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("92c744f9-1dfb-4273-962d-44f0a957c5f9");
    }, []);

    return null;
};