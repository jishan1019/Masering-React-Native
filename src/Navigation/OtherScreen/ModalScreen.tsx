import React from 'react';
import {Button, Modal, Text, View, StyleSheet} from 'react-native';

export default function ModalScreen() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Screen</Text>

      <Button onPress={() => setShowModal(!showModal)} title="Show Modal" />

      <Modal
        animationType="fade"
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Modal Components</Text>

          <View style={styles.modalContent}>
            <Text>This is a modal with some content.</Text>
          </View>

          <Button
            title="Close modal"
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  modalButton: {
    marginTop: 10,
  },
});
