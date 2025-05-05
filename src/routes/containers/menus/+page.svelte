<script>
	import { Page, PageBody, Menu, Button, ProfileMenu } from "$lib/index.js"
</script>

<Page>
    <PageBody size="full">
        <h1>Menus</h1>
        <Menu 
            menuOpen
            menuList={[
                {
                    name: 'First Link',
                    url: '/containers/menus'
                },
                {
                    name: 'Second Link',
                    url: '/containers/menus'
                }
            ]}
        >
            <Button 
                slot="menu-footer"
                classes={['btn-full', 'btn-m', 'btn-outline']}
                text="Button"    
            />
        </Menu>

        <ProfileMenu 
            menuOpen
            menuList={[
                {
                    name: 'First Link',
                    url: '/containers/menus'
                },
                {
                    name: 'Second Link',
                    url: '/containers/menus'
                }
            ]}
        />
    </PageBody>
</Page>