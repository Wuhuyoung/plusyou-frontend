/**
 * 用户类别
 */
export type CurrentUser = {
    id: number;
    username?: string;
    planetCode?: string;
    userAccount: string;
    avatarUrl?: string;
    profile?: string;
    gender?: number;
    phone?: string;
    email?: string;
    status: number;
    userRole: number;
    tags: string[];
    createTime: Date;
};
