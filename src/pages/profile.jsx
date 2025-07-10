// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Heart, History, MessageSquare, Shield, LogOut } from 'lucide-react';

import { UserCard } from '@/components/UserCard';
import { StatsCard } from '@/components/StatsCard';
import { FeatureItem } from '@/components/FeatureItem';
export default function Profile(props) {
  const {
    $w
  } = props;
  const user = $w.auth.currentUser;
  const handleLogout = () => {
    if (confirm('确定要退出登录吗？')) {
      // 实际开发中这里应该是退出登录逻辑
      console.log('用户已退出登录');
    }
  };
  return <div className="max-w-md mx-auto min-h-screen bg-white">
      <UserCard user={user} />

      <div className="p-6 grid grid-cols-3 gap-4 text-center">
        <StatsCard title="收藏" value="128" />
        <StatsCard title="关注" value="56" />
        <StatsCard title="粉丝" value="89" />
      </div>

      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <FeatureItem icon={<Heart className="h-5 w-5 text-red-500" />} title="我的收藏" />
          <FeatureItem icon={<History className="h-5 w-5 text-blue-500" />} title="浏览历史" />
          <FeatureItem icon={<MessageSquare className="h-5 w-5 text-green-500" />} title="我的评论" />
          <FeatureItem icon={<Shield className="h-5 w-5 text-purple-500" />} title="账号安全" />
        </div>
      </div>

      <div className="p-6 mt-8">
        <Button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center justify-center" onClick={handleLogout}>
          <LogOut className="h-5 w-5 mr-2" />
          退出登录
        </Button>
      </div>
    </div>;
}