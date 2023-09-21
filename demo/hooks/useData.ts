import { ref } from 'vue'

export function useData() {
  const data = ref<Array<{ index: number; text: string }>>([])
  const list = Array(100000).fill('Hello World')

  list.forEach((text, index) => {
    data.value.push({ index, text })
  })

  return data
}
