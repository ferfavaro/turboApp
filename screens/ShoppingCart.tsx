import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, Checkbox } from 'react-native-paper';
import { Button, ButtonText } from '@gluestack-ui/themed';
import Toast from 'react-native-toast-message';

type ParamList = {
  ShoppingCart: {
    vehicleName: string;
    tripPrice: number;
    fare: number;
    tax: number;
  };
};

export default function ShoppingCart() {
  const { params } = useRoute<RouteProp<ParamList, "ShoppingCart">>();
  const navigation = useNavigation();
  const [accidentProtection, setAccidentProtection] = useState(false);
  const [completeWash, setCompleteWash] = useState(false);
  const [discount, setDiscount] = useState('');

  const additionalCosts = (accidentProtection ? 50 : 0) + (completeWash ? 20 : 0);
  const total = params.tripPrice + params.fare + params.tax + additionalCosts - (parseFloat(discount) || 0);

  const handleConfirm = () => {
    Toast.show({
      type: 'success',
      text1: 'Veículo Reservado com sucesso',
    });
    navigation.navigate('MapCar');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.goBack()} bg={"#FFA500"} style={styles.backButton}>
        <ButtonText>Voltar</ButtonText>
      </Button>
      <Text style={styles.title}>Carrinho</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalhes do Veículo</Text>
        <View style={styles.vehicleDetails}>
          <Text>Nome do Veículo: {params.vehicleName}</Text>
          <Image source={require("../images/hb20.png")} style={styles.carImage} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Adicionar</Text>
        <Checkbox.Item
          label="Proteção contra acidentes"
          status={accidentProtection ? 'checked' : 'unchecked'}
          onPress={() => setAccidentProtection(!accidentProtection)}
        />
        <Checkbox.Item
          label="Lavagem completa"
          status={completeWash ? 'checked' : 'unchecked'}
          onPress={() => setCompleteWash(!completeWash)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Desconto</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o desconto"
          keyboardType="numeric"
          value={discount}
          onChangeText={setDiscount}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preço</Text>
        <Text>Preço da Viagem: R$ {params.tripPrice.toFixed(2)}</Text>
        <Text>Tarifa: R$ {params.fare.toFixed(2)}</Text>
        <Text>Tributo: R$ {params.tax.toFixed(2)}</Text>
        <Text>Adicionais: R$ {additionalCosts.toFixed(2)}</Text>
        <Text>Total: R$ {total.toFixed(2)}</Text>
      </View>

      <Button bg={"#FF5F00"} onPress={handleConfirm}>
        <ButtonText>Confirmar</ButtonText>
      </Button>

      <Toast />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  vehicleDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  carImage: {
    width: 100,
    height: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
});