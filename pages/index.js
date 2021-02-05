import { EmptyState, Layout, Page } from '@shopify/polaris';

function Index() {
    return (
        <Page>
            <Layout>
                <EmptyState
                  heading="Select the best selling products to show on your storefront."
                  action={{content: 'Select Products'}}
                  image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                >
                    <p>Select Products</p>
                </EmptyState>
            </Layout>
        </Page>
    )
}

export default Index;