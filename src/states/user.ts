import {CurrentUser} from "../models/user";
import myAxios from "../plugins/myAxios";

let user;

const setCurrentUser = (newUser: CurrentUser) => {
    user = newUser;
}
const getCurrentUser = async () => {
    if (user) {
        return user;
    }
    // 不存在则从远程获取
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUser(res.data)
        return user;
    }
    return null
}
const refreshAndGetCurrentUser = async () => {
    const res = await myAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUser(res.data);
        return user;
    }
    return null
}
export {
    setCurrentUser,
    getCurrentUser,
    refreshAndGetCurrentUser
}
