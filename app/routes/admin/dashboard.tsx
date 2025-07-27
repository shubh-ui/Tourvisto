import { Header } from "~/components"

const Dashboard = () => {
  const user = {
    name : "Shubham",

  }
  return (
    <main className="dashboard wrapper">
        <Header 
          title = {`Welcome ${user.name ?? 'Guest'}, 👋`}
          description = "Track activity, trends and populer destination in real time"
        />
    </main>
  )
}

export default Dashboard