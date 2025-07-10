// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Avatar, AvatarFallback, AvatarImage, Button } from '@/components/ui';
// @ts-ignore;
import { Camera } from 'lucide-react';

export function UserCard({
  user
}) {
  return <div className="bg-blue-500 text-white p-6 rounded-b-3xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">个人中心</h1>
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-600">
          <Camera className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative">
          <Avatar className="w-20 h-20 border-4 border-white">
            <AvatarImage src={user?.avatarUrl || "https://randomuser.me/api/portraits/women/44.jpg"} />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <input type="file" accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{user?.name || "未登录用户"}</h2>
          <p className="text-blue-100">@{user?.nickName || "username"}</p>
        </div>
      </div>
    </div>;
}