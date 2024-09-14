import { Entypo } from '@expo/vector-icons'
import { config } from '@gluestack-ui/config';
import { Box, Button, ButtonText, GluestackUIProvider, HStack, SafeAreaView, Text, VStack, ButtonIcon, Image } from '@gluestack-ui/themed';
import { Routes } from './routes';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Routes/>
    </GluestackUIProvider>
  );
}

