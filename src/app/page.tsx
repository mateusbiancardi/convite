"use client";

import { Button } from "@/components/ui/button";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const ref = useRef<HTMLButtonElement>(null);
  const [fase, setFase] = useState(0);

  const handleMouseOver = () => {
    if (ref.current) {
      const randomX = Math.random() * 30;
      const randomY = Math.random() * 30;

      ref.current.style.right = `${Math.abs(randomX - parseFloat(ref.current.style.left || "0"))}vw`;
      ref.current.style.top = `${Math.abs(randomY - parseFloat(ref.current.style.left || "0"))}vh`;
    }
  };

  return (
    <Flex
      minH="100vh"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      bgGradient="to-br"
      flexDirection="column"
      gap={2}
      bgColor="#ebcfc3"
      color={"#000"}
    >
      <Flex position="absolute" top={16} left={16}>
        <Image alt="gato 1" src="/images/gato1.jpg" width={200} height={200} />
      </Flex>
      <Flex position="absolute" bottom={16} right={16}>
        <Image
          alt="emoji 4"
          src="/images/emoji4.png"
          width={200}
          height={200}
        />
      </Flex>
      {fase === 0 ? (
        <>
          <Heading textAlign="center" fontSize="3xl">
            Gostaria de saber se você quer sair comigo? 🥺
          </Heading>
          <Flex gap={1} position="relative">
            <Button onClick={() => setFase(1)} colorPalette="green">
              Sim
            </Button>
            <Button colorPalette="red" ref={ref} onMouseEnter={handleMouseOver}>
              Não
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Heading textAlign="center" fontSize="3xl">
            Sabia que você iria me dar uma chance! 😍
          </Heading>
          <Text>Vou entrar em contato em breve!</Text>
          <Image
            alt="pato 1"
            src="/images/emoji2.png"
            width={200}
            height={200}
          />
        </>
      )}
    </Flex>
  );
}
