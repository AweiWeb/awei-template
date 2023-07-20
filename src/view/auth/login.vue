<script setup lang="ts">
import v from '@/plugins/validate/index'
import { loginUser } from '@/utils/user'

// const form = reactive({
//     username: '',
//     password: ''
// })
// console.log(form);
const { Field, Form, ErrorMessage } = v

//验证规则
const schema = v.yup.object({
    account: v.yup.string().required().email().label('帐号'),
    password: v.yup.string().required().min(3).label('密码')
})
const loginBtn = async (values: any) => {
    loginUser(values)
}
</script>
<template>
    <Form @submit="loginBtn" :validation-schema="schema">
        <div class="bg-slate-300 h-screen flex justify-center items-center p-5 md:p-0">
            <div
                class="w-[720px] translate-y-2 md:translate-y-0 bg-white -translate-y-16 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
                <div class="p-6 flex flex-col justify-between">
                    <div>
                        <h2 class="text-center text-gray-700 text-lg">用户登录</h2>
                        <div class="mt-10">
                            <Field name="account" value="awei@13456" class="awei-input" :validate-on-input="true"
                                placeholder="请输入手机号或者邮箱" />
                            <ErrorMessage name="account" as="div" class="awei-error" />
                            <Field name="password" value="awei666" class="awei-input mt-5" :validate-on-input="true"
                                placeholder="请输入密码" type="password" />
                            <ErrorMessage name="password" as="div" class="awei-error" />
                        </div>
                        <awei-button class="w-full">登录</awei-button>
                        <div class="flex justify-center mt-3">
                            <i class="fa-brands fa-qq bg-blue-400 rounded-full text-white p-2 cursor-pointer"></i>
                        </div>
                    </div>
                    <div class="flex gap-2 justify-center mt-5">
                        <awei-link>会员注册</awei-link>
                        <awei-link>网站首页</awei-link>
                        <awei-link>找回密码</awei-link>
                    </div>
                </div>
                <div class="hidden md:block relative"><img src="/public/login.jpg"
                        class="absolute h-full w-full object-cover" alt=""></div>
            </div>
        </div>
    </Form>
</template>
<style lang="scss"></style>
<script lang="ts">
export default {
    route: {
        name: 'login',
        guest: true
    }
}
</script>