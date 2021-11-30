<template>
  <Flex class="wrapper" align="center" direction="column">
    <Background />
    <Logo>
      <LogoIcon aria-label="Simpsonbay Heritage Logo" />
    </Logo>
    <Text color="green" typeStyle="h2" size="10rem">404 - Page not found</Text>
    <Text color="green" typeStyle="h3"
      >Sorry, the page you are looking for was not found.</Text
    >
    <Text color="green" typeStyle="note"
      >(It's probably out laying on the beach, where you should be too...)</Text
    >
  </Flex>
</template>

<script>
import { Flex, Text } from "../Atoms/Atoms.styles";
import { Background, Logo } from "../../views/Login/Login.styles";
import LogoIcon from "../../assets/logo-stacked.svg";

export default {
  components: { Flex, Text, Background, Logo, LogoIcon },
};
</script>

<style>
.wrapper {
  height: 100%;
}
</style>
