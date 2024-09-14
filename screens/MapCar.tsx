import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Box, VStack, Text, Input, InputField, HStack, Button, ButtonText, Icon, SearchIcon, StarIcon, MenuIcon, Modal } from '@gluestack-ui/themed';
import { Checkbox, RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function MapCar() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [distance, setDistance] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const navigation = useNavigation();

  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const applyFilter = () => {
    // Lógica para aplicar o filtro
    toggleFilter();
  };

  const handleCategoryChange = (value: string) => {
    setCategory((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleRent = () => {
    navigation.navigate('ShoppingCart', {
      vehicleName: 'Hyundai HB20 - 2021',
      tripPrice: 35,
      fare: 20, 
      tax: 10
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image source={require("../images/mapa.png")} style={styles.backgroundImage} />
        <VStack marginHorizontal={"$5"} flex={1} style={styles.content}>
          <Input bg={"white"} mt={'$1/5'} style={{ borderRadius: 10, overflow: 'hidden' }}>
            <InputField placeholder='Av. Paulista, 1230' value={"" || ""} style={styles.inputField} />
          </Input>
          <View style={styles.spacer} />
          <HStack justifyContent='center' w={"$full"} style={styles.buttonContainer}>
            <Button borderTopLeftRadius={"$md"} borderBottomLeftRadius={"$md"} borderRadius={"$none"} bg='#FF5F00'>
              <Icon as={MenuIcon} size={"md"} color="white" />
              <ButtonText ml={"$1"}>Lista</ButtonText>
            </Button>
            <Button onPress={toggleFilter} borderTopRightRadius={"$md"} borderBottomRightRadius={"$md"} borderRadius={"$none"} bg='#FF5F00'>
              <Icon as={SearchIcon} size={"md"} color="white" />
              <ButtonText ml={"$1"}>Filtro</ButtonText>
            </Button>
          </HStack>
          <Box style={styles.infoBox}>
            <HStack alignItems="center">
              <Image source={require("../images/hb20.png")} style={styles.carImage} />
            </HStack>
            <VStack alignItems="center" mt={"$2"}>
            <Text style={styles.carTitle}>Hyundai HB20 - 2021</Text>
              <HStack mt={"$1"}>
                <Icon as={StarIcon} size={"md"} color="gold" />
                <Text style={styles.ratingText}>4.5 (124 avaliações)</Text>
              </HStack>
              <Button mt={"$1"} bg='#FF5F00' onPress={handleRent}>
                <ButtonText>Alugar</ButtonText>
              </Button>
            </VStack>
          </Box>
        </VStack>
      </View>

      <Modal isOpen={isFilterVisible} onClose={toggleFilter}>
        <Modal.Content>
          <Modal.CloseButton />

          <Modal.Header>
            <Text bold>Filtro</Text>
          </Modal.Header>
          <Modal.Body>
            <Text>Distância</Text>
            <RadioButton.Group
              onValueChange={value => setDistance(value)}
              value={distance}
            >
              <RadioButton.Item label="<1 km" value="<1 km" />
              <RadioButton.Item label="1-5 km" value="1-5 km" />
              <RadioButton.Item label=">5 km" value=">5 km" />
            </RadioButton.Group>
            <Text mt={"$3"}>Categoria</Text>
            <Checkbox.Item
              label="Carro"
              status={category.includes('Carro') ? 'checked' : 'unchecked'}
              onPress={() => handleCategoryChange('Carro')}
            />
            <Checkbox.Item
              label="SUV"
              status={category.includes('SUV') ? 'checked' : 'unchecked'}
              onPress={() => handleCategoryChange('SUV')}
            />
            <Checkbox.Item
              label="Minivan"
              status={category.includes('Minivan') ? 'checked' : 'unchecked'}
              onPress={() => handleCategoryChange('Minivan')}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={applyFilter} bg='#FF5F00'>
              <ButtonText>Aplicar Filtro</ButtonText>
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  content: {
    zIndex: 1,
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  inputField: {
    flex: 1,
    marginLeft: 10,
  },
  infoBox: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  carImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'gray',
  },
});