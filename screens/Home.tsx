import { Entypo } from '@expo/vector-icons'
import { config } from '@gluestack-ui/config';
import { Input, Button, ButtonText, HStack, SafeAreaView, Text, VStack, InputField} from '@gluestack-ui/themed';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import Turbo from '../assets/TURBO.png';

export function Home() {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <SafeAreaView h={"100%"} marginVertical={'$10'}>
    <VStack justifyContent='center' h={"$1/2"} m="$5" space='lg'>

      <Text bold color='black' fontSize="$2xl" >Bem-vindo</Text>

      <Text bold color='#003778' fontSize="$md" >Email</Text>
      <Input style={{ borderRadius: 10, overflow: 'hidden' }}>
        <InputField placeholder='Seu e-mail' onChangeText={setEmail} value={email || ""}></InputField>
      </Input>

      <Text bold color='#003778' fontSize="$md" >Senha</Text>
      <Input style={{ borderRadius: 10, overflow: 'hidden' }}>
        <InputField 
          placeholder='Sua senha' 
          onChangeText={setPassword} 
          value={password || ""} 
          secureTextEntry={!isPasswordVisible} 
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ position: 'absolute', right: 10, top: 10 }}>
          <Entypo name={isPasswordVisible ? "eye" : "eye-with-line"} size={24} color="black" />
        </TouchableOpacity>
      </Input>

      <Button onPress={() => navigation.navigate("MapCar")} bg='#FF5F00'>
        <ButtonText>Entrar</ButtonText>
      </Button>
      
    </VStack>
  </SafeAreaView>
  )
}