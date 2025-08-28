<script lang="ts" setup>
import { useData } from 'vitepress'
import { computed, ref, onMounted, } from 'vue'
import { countWord } from '../untils/functions'


const { page } = useData()
const date = computed(
    () => new Date(page.value.lastUpdated!)
)

const wordCount = ref(0)
const imageCount = ref(0)

const wordTime = computed(() => {
    return ((wordCount.value / 275) * 60)
})

const imageTime = computed(() => {
    const n = imageCount.value
    if (imageCount.value <= 10) {
        // 等差数列求和
        return n * 13 + (n * (n - 1)) / 2
    }
    return 175 + (n - 10) * 3
})

// 阅读时间
const readTime = computed(() => {
    return Math.ceil((wordTime.value + imageTime.value) / 60)
})


function analyze() {
    document.querySelectorAll('.meta-des').forEach(v => v.remove())
    const docDomContainer = window.document.querySelector('#VPContent')
    const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
        '.content-container .main img'
    )
    imageCount.value = imgs?.length || 0
    const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
    wordCount.value = countWord(words)
}

onMounted(() => {
    // 初始化时执行一次
    analyze()
})


</script>


<template>
    <div class="word meta-container">
        <div class="meta-row">
            <div class="meta-left">
                <svg class="icon" viewBox="0 0 1024 1024" width="16" height="16">
                    <path
                        d="M204.8 0h477.866667l273.066666 273.066667v614.4c0 75.093333-61.44 136.533333-136.533333 136.533333H204.8c-75.093333 0-136.533333-61.44-136.533333-136.533333V136.533333C68.266667 61.44 129.706667 0 204.8 0z m307.2 607.573333l68.266667 191.146667c13.653333 27.306667 54.613333 27.306667 61.44 0l102.4-273.066667c6.826667-20.48 0-34.133333-20.48-40.96s-34.133333 0-40.96 13.653334l-68.266667 191.146666-68.266667-191.146666c-13.653333-27.306667-54.613333-27.306667-68.266666 0l-68.266667 191.146666-68.266667-191.146666c-6.826667-13.653333-27.306667-27.306667-47.786666-20.48s-27.306667 27.306667-20.48 47.786666l102.4 273.066667c13.653333 27.306667 54.613333 27.306667 61.44 0l75.093333-191.146667z"
                        fill="#777777" />
                </svg>
                字数
            </div>
            <div class="meta-right">全文 {{ wordCount }} 字</div>
        </div>

        <div class="meta-row">
            <div class="meta-left">
                <svg class="icon" viewBox="0 0 1060 1024" width="16" height="16">
                    <path
                        d="M556.726857 0.256A493.933714 493.933714 0 0 0 121.929143 258.998857L0 135.021714v350.390857h344.649143L196.205714 334.482286a406.820571 406.820571 0 1 1-15.908571 312.649143H68.937143A505.819429 505.819429 0 1 0 556.726857 0.256z m-79.542857 269.531429v274.907428l249.197714 150.966857 42.422857-70.070857-212.114285-129.389714V269.787429h-79.542857z"
                        fill="#8a8a8a" />
                </svg>
                时长
            </div>
            <div class="meta-right">预计 {{ readTime }} 分钟</div>
        </div>
        <div class="meta-row">
            <div class="meta-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024">
                    <path fill="currentColor"
                        d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39m563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5M396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5">
                    </path>
                </svg>
                阅读量
            </div>
            <div class="meta-right"> <span id="vercount_value_page_pv">-</span> </div>
        </div>
    </div>
</template>


<style>
.word {
    color: var(--vp-c-text-2);
    font-size: 15px;
    width: 100%;
    /* 填充页面 */
    padding: 16px;
}

.meta-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* 每行间距 */
}

.meta-row {
    display: flex;
    width: 100%;
}

.meta-left {
    flex: 3;
    /* 左右比例 3/7 */
    display: flex;
    align-items: center;
    gap: 5px;
    /* 图标和文字间距 */
    text-align: left;
    /* 左对齐 */
}

.meta-right {
    flex: 7;
    text-align: left;
    /* 左对齐数据 */
}

.icon {
    display: inline-block;
    transform: translateY(2px);
}
</style>
