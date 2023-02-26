import { Card, Spacer, Text, Button, Row, Grid, Link } from '@nextui-org/react'

export default function Home() {
  return (
    <>
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", "alignItems": "center"}}>
      <Card css={{ bg: "$white", maxWidth: "380px", borderRadius: "15px" }}>
        <img src="https://cdn.discordapp.com/attachments/1074339253246496779/1079367294993584219/illustration-hero.png" />

        <Spacer y={1.2} />
        <Text css={{ color: "#1B2C4F", fontSize: "25px", fontWeight: "900", marginLeft: "auto", marginRight: "auto" }}>Order Summary</Text>
        <Spacer y={0.5} />
        <Text css={{ color: "#8A8DA7", fontSize: "15px", fontWeight: "600", marginLeft: "auto", marginRight: "auto" }}>You can now listen to millions of songs,</Text>
        <Text css={{ color: "#8A8DA7", fontSize: "15px", fontWeight: "600", marginLeft: "auto", marginRight: "auto" }}>audiobooks, and podcasts on any device</Text>
        <Text css={{ color: "#8A8DA7", fontSize: "15px", fontWeight: "600", marginLeft: "auto", marginRight: "auto" }}>anywhere you like!</Text>
        <Spacer y={0.5} />

        <Card variant="flat" css={{ width: "80%", marginLeft: "auto", "marginRight": "auto", bg: "#F8F9FE" }}>
          <Row>
            <Grid.Container gap={1}>
              <Grid>
                <img src="https://media.discordapp.net/attachments/1074339253246496779/1079431248193265734/icon-music.png" style={{ width: "45px", marginTop: "15px", marginBottom: "15px", marginLeft: "20px"  }} />
              </Grid>
              <Grid>
                <Text css={{ color: "#1B2C4F", fontSize: "16px", fontWeight: "900", marginTop: "13px"}}>Annual Plan</Text>
                <Text css={{ color: "#8A8DA7", fontSize: "15px", fontWeight: "600" }}>$59.99/year</Text>
              </Grid>          
            </Grid.Container>
            <Link underline css={{ color: "#624DF2", fontSize: "13px", fontWeight: "700", marginRight: "20px", marginTop: "auto", marginBottom: "auto" }}>Change</Link>
          </Row>
        </Card>
        <Spacer y={1} />
        <Button animated={false} css={{ bg: "#382AE1", width: "80%", marginLeft: "auto", marginRight: "auto", fontWeight: "700", fontSize: "13px", "&:hover": { bg: "#766CF1" } }}>Proceed to Payment</Button>
        <Spacer y={1} />
        <Link css={{ color: "#8A8DA7", fontSize: "13px", fontWeight: "700", marginLeft: "auto", marginRight: "auto", "&:hover": { color: "black" } }}>Cancel Order</Link>
        <Spacer y={2} />
      </Card>
    </div>
  </>
  )
}
