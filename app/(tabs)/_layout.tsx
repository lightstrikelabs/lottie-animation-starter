import { BookOpen as BookIcon } from '@/lib/icons/Book';
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
          tabBarIcon: ({ color, size }) => <BookIcon color={color} size={size} className="text-foreground" />,
        }}
      />
    </Tabs>
  );
}
