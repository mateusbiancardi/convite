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
      // Dimensões do botão
      const buttonWidth = ref.current.offsetWidth;
      const buttonHeight = ref.current.offsetHeight;

      // Dimensões da janela (considerando viewport)
      const maxX = window.innerWidth - buttonWidth; // Limite horizontal
      const maxY = window.innerHeight - buttonHeight; // Limite vertical

      // Gerar posições aleatórias dentro dos limites visíveis
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      // Atualizar a posição do botão
      ref.current.style.position = "absolute";
      ref.current.style.left = `${randomX}px`;
      ref.current.style.top = `${randomY}px`;
    }
  };

  return (
    <Flex
      minH="100vh"
      minW="100vw"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="to-br"
      flexDirection="column"
      gap={2}
      bgColor="#ebcfc3"
      color={"#000"}
      position="relative"
    >
      {fase === 0 ? (
        <>
          <Flex
            w={"100%"}
            p={4}
            justifyContent={["center", "start"]}
            display={["flex", "none"]}
          >
            <Image
              alt="gato 1"
              src="/images/gato1.jpg"
              width={100}
              height={100}
            />
          </Flex>

          <Flex
            w={"100%"}
            p={4}
            justifyContent={["center", "start"]}
            display={["none", "flex"]}
          >
            <Image
              alt="gato 1"
              src="/images/gato1.jpg"
              width={200}
              height={200}
            />
          </Flex>

          <Flex flexDirection="column" gap={2} alignItems="center">
            <Heading textAlign="center" fontSize="3xl">
              Gostaria de saber se você quer sair comigo? 🥺
            </Heading>
            <Flex flexDirection="column" gap={1}>
              <Button onClick={() => setFase(1)} colorPalette="green">
                Sim
              </Button>
              <Button
                colorPalette="red"
                ref={ref}
                onMouseEnter={handleMouseOver}
                onClick={handleMouseOver}
                transition={"all 0.1s"}
              >
                Não
              </Button>
            </Flex>
          </Flex>

          <Flex
            justifyContent={["center", "end"]}
            w={"100%"}
            p={4}
            display={["flex", "none"]}
          >
            <Image
              alt="emoji 4"
              src="/images/emoji4.png"
              width={100}
              height={100}
            />
          </Flex>

          <Flex
            justifyContent={["center", "end"]}
            w={"100%"}
            p={4}
            display={["none", "flex"]}
          >
            <Image
              alt="emoji 4"
              src="/images/emoji4.png"
              width={200}
              height={200}
            />
          </Flex>
        </>
      ) : (
        <Flex
          flexDirection="column"
          gap={2}
          alignItems="center"
          justifyContent={"center"}
          h={"100vh"}
        >
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
        </Flex>
      )}
    </Flex>
  );
}
