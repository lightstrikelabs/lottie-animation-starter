import { Tabs } from 'expo-router';

export const unstable_settings = {
  initialRouteName: "index",
};

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Lottie Tester',
        }}
      />
    </Tabs>
  );
}
