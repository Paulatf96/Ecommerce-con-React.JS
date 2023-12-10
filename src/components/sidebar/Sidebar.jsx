
import { Sidebar } from 'flowbite-react'
import { menu } from '../../data/menu'

function SidebarComponent() {
  return (
    <Sidebar aria-label="Menu navigation condominios">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menu.map(el => (
            <Sidebar.Item key={el.name} href={el.path} className='text-lg font-light tracking-tighter mb-4'>
              {el.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SidebarComponent