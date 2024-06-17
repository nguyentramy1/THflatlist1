import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

const notifications = [
  {
    id: '1',
    type: '1',
    status: '0',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
  },
  {
    id: '2',
    type: '2',
    status: '0',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '3',
    type: '2',
    status: '1',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '4',
    type: '2',
    status: '0',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '5',
    type: '1',
    status: '1',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
  },
  {
    id: '6',
    type: '1',
    status: '1',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
  },
];


const NotiCardTask = ({ title, description, date, status }) => (
  <Card style={[styles.card, status === '0' && styles.cardStatus]}>
    <Card.Title
      title={title}
      subtitle={description}
      left={(props) => <Avatar.Icon {...props} icon="check" />}
    />
    <Card.Content>
      <Text style={styles.date}>{date}</Text>
    </Card.Content>
  </Card>
);


const NotiCardCus = ({ title, description, date, status }) => (
  <Card style={[styles.card, status === '0' && styles.cardStatus]}>
    <Card.Title
      title={title}
      subtitle={description}
      left={(props) => <Avatar.Icon {...props} icon="account" />}
    />
    <Card.Content>
      <Text style={styles.date}>{date}</Text>
    </Card.Content>
  </Card>
);


const Footer = () => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.footerItem}>
      <Avatar.Icon size={24} icon="home-outline" />
      <Text style={styles.footerText}>Trang chủ</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Avatar.Icon size={24} icon="airplane" />
      <Text style={styles.footerText}>Khám phá</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.item}>
      <Avatar.Icon size={24} icon="plus" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Avatar.Icon size={24} icon="bell-outline" />
      <Text style={styles.footerText}>Thông báo</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.footerItem}>
      <Avatar.Icon size={24} icon="account-outline" />
      <Text style={styles.footerText}>Tài khoản</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => {
          if (item.type === '1') {
            return (
              <NotiCardTask
                title={item.title}
                description={item.description}
                date={item.date}
                status={item.status}
              />
            );
          } else if (item.type === '2') {
            return (
              <NotiCardCus
               title={item.title}
                description={item.description}
                date={item.date}
                status={item.status}
              />
            );
          }
        }}
        keyExtractor={item => item.id}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 0, // Loại bỏ bo góc của thẻ Card
  },
  cardStatus: {
    backgroundColor: 'lightblue',
  },
  date: {
    marginTop: 8,
    color: '#777',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: 1.5 }], 
    
  },
  footerText: {
     fontSize: 12, 
      color: '#777',
  },
});
