import { CardItems } from '@/components/champions/CardItems'
import { fetchItems, fetchVersion } from '@/lib/utils/serverApi'

export default async function ItemsPage() {
  const version = await fetchVersion()
  const items = await fetchItems()
  // console.log(items, version)

  return (
    <article className="flex flex-col gap-10 p-4">
      <div className="txt">
        <h2 className="font-bold">아이템 목록 보기</h2>
        <p>Riot Games API를 활용하여 아이템 정보를 제공합니다.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items?.map((item) => (
          <CardItems key={item.id} item={item} version={version} className="flex flex-col-reverse items-center gap-2 text-sm" />
        ))}
      </div>
    </article>
  )
}
