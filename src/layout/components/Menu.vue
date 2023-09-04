<script setup lang="ts">
// import { ref } from 'vue'; 
// import { MenuRouter } from '@/store/menu'
import { useRouter } from 'vue-router';
import NMenu from '@/composables/menu.ts'
import { watch } from 'vue';
const route = useRouter() as any
watch(route, () => {
    NMenu.MenuHight(route)
}, { immediate: true })
// const router = useRouter()
// const MenuData = MenuRouter()

// const router2 = MenuData.routes
// console.log(router2);

// const menus = ref<IMenu[]>([{
//     title: 'admin', icon: 'fab fa-atlassian', active: true, children: [
//         { title: '主页编辑', active: true }, { title: '主页时间' }
//     ]
// }, {
//     title: 'setting', icon: 'fas fa-sun', children: [
//         { title: '设置时间' }, { title: '设置信息' }
//     ]
// }])
// const resetMenu = () => {
//     MenuData.menus.forEach((item) => {
//         item.isActive = false
//         item.children?.forEach((chil) => {
//             chil.isActive = false
//         })
//     })
// }

// const handle = (pMenu: IMenu, cMenu?: IMenu) => {
//     resetMenu()
//     pMenu.isActive = true
//     if (cMenu) {
//         cMenu.isActive = true
//         console.log(cMenu);
//         router.push({ name: cMenu.route })
//     }
// }
</script>
<template>
    <div class="admin-menu">
        <div class="menu bg-gray-600 p-4" :class="{ close: NMenu.close.value }">
            <div class="logo">
                <i class="fab fa-vuejs text-green-400 text-[25px] mr-2"></i>
                <span class="text-md text-white">阿伟web空间</span>
            </div>
            <!-- 菜单 -->
            <div class="left-content hover:cursor-pointer">
                <dl>
                    <dt @click="$router.push('/admin/home')"
                        class="mt-2 hover:bg-purple-300 text-sm rounded-md text-center p-3"
                        :class="{ 'bg-purple-300': $route.name === 'admin.home' }">
                        <section>
                            <i class="fas fa-igloo mr-2"></i>
                            <span>dashboard</span>
                        </section>
                    </dt>
                </dl>
                <dl v-for="(item, index) in NMenu.menus.value " :key="index">
                    <dt @click="NMenu.toggleParent(item)">
                        <section>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </section>
                        <section>
                            <i class="fas fa-angle-down duration-300" :class="{ 'rotate-180': !item.isActive }"></i>
                        </section>
                    </dt>
                    <dd :class="!item.isActive || NMenu.close.value ? 'hidden' : 'block'">
                        <div :class="{ active: $route.name === chil.route }" @click="$router.push({ name: chil.route })"
                            v-for="( chil, index) in item.children " :key="index">
                            {{ chil.title }}</div>
                    </dd>
                </dl>
            </div>
        </div>
        <div class="bg block md:hidden" @click="NMenu.toggleMenu"></div>
    </div>
</template>
<style scoped lang="scss">
.admin-menu {
    @apply z-20;

    .menu {
        @apply h-full;

        .logo {
            @apply text-gray-200 flex justify-center items-center;
        }

        .left-content {
            dl {
                @apply text-gray-200 text-sm relative;

                dt {
                    @apply text-sm mt-6 flex justify-between items-center;

                    section {
                        @apply flex items-center;

                        i {
                            @apply mr-2 text-sm;
                        }
                    }
                }

                dd {
                    div {
                        @apply py-3 pl-4 text-white my-2 rounded-md cursor-pointer bg-gray-500 hover:bg-purple-300;

                        &.active {
                            @apply bg-purple-300;
                        }
                    }
                }
            }
        }

        &.close {
            @apply w-auto;

            .logo {
                span {
                    @apply hidden
                }
            }

            .left-content {
                dl {
                    dt {
                        @apply flex justify-center items-center;

                        section {
                            span {
                                @apply hidden;
                            }

                            &:nth-of-type(2) {
                                @apply hidden
                            }
                        }


                    }

                    &:hover {
                        dd {
                            @apply block absolute left-full w-[200px] bg-gray-600 top-[-20px] rounded-md;
                        }
                    }
                }
            }
        }
    }

}

@media screen and (max-width:768px) {
    .admin-menu {
        @apply absolute left-0 top-0 z-50 h-screen w-[200px];

        .menu {
            @apply h-full;

            .close {}
        }

        .bg {
            @apply bg-gray-100 opacity-75 w-screen h-screen absolute left-0 top-0
        }

        &.close {
            @apply hidden;
        }
    }
}
</style>