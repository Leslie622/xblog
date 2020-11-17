<template>
  <main-home>
    <div class="main_friends">
      <ul class="friend_list">
        <li class="friend_item" v-for="(item, index) in friendList">
          <img :src="item.avatar" alt="头像" />
          <p class="nickname">{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </main-home>
</template>
 
<script>
import MainHome from "../home/Home";
export default {
  data() {
    return {
      friendList: [
        { name: "Einstein", avatar: require("../../assets/img/avatar/1.jpg") },
        { name: "AnimeMen", avatar: require("../../assets/img/avatar/4.jpg") },
        { name: "Jiraiya", avatar: require("../../assets/img/avatar/3.jpg") },
        {
          name: "MadameCurie",
          avatar: require("../../assets/img/avatar/2.jpg"),
        },
        { name: "seaBear", avatar: require("../../assets/img/avatar/5.jpg") },
        { name: "Chihiro", avatar: require("../../assets/img/avatar/6.jpg") },
        { name: "AnimeMen", avatar: require("../../assets/img/avatar/7.jpg") },
        {
          name: "LeslieCheung",
          avatar: require("../../assets/img/avatar/cheung.jpg"),
        },
      ],
    };
  },
  components: {
    MainHome,
  },
};
</script>

<style scoped>
.friend_list {
  display: table-cell;
  margin-top: 30px;
  padding-bottom: 2rem;
  padding-top: 2rem;
  width: 50rem;
  max-width: 100vw;
  text-align: center;
}

.friend_item {
  display: inline-block;
  margin: 20px;
  width: 33vw;
  max-width: 10rem;
  text-align: center;
  cursor: pointer;
}

.friend_item img {
  width: 55%;
  border-radius: 50%;
  transition: all 0.5s;
}

.friend_item:hover img {
  transform: rotate(15deg) scale(1.1);
}

.friend_item:hover .nickname {
  opacity: 0.5;
}

.friend_item .nickname {
  margin-top: 10px;
  font-family: Arial;
  font-size: 20px;
  color: #249ffd;
  transition: all 0.5s;
}
</style>