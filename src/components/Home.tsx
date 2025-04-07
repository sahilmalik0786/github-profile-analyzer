import { useState } from "react";
import axios from 'axios'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import GithubCard from "./GithubCard";
import ReposList from "./ReposList";
import LanguageChart from "./LanguageChart";
import ActivityCalender from "./ActivityCalender";


 export  interface GitHubUser {
  login: string
  name: string
  avatar_url: string
  bio: string
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export  interface GitHubRepo {
  name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
}

function Home() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(false)
  const [languageData, setLanguageData] = useState<Record<string, number>>({})
  const analyzeProfile = async () => {
    if (!username.trim()&&username!=="") {
     toast(`Success , Profile Data has fetched for ${username}`)
      
    }

    setLoading(true)
    try {
      // Fetch user data
      const userResponse = await axios.get(`https://api.github.com/users/${username.trim()}`)
      setUser(userResponse.data)

      // Fetch repositories
      const reposResponse = await axios.get(`https://api.github.com/users/${username.trim()}/repos`, {
        params: {
          per_page: 100,
          sort: 'updated',
        }
      })
      setRepos(reposResponse.data)

      // Calculate language distribution
      const langData: Record<string, number> = {}
      reposResponse.data.forEach((repo: GitHubRepo) => {
        if (repo.language) {
          langData[repo.language] = (langData[repo.language] || 0) + 1
        }
      })
      setLanguageData(langData)

      toast(`Success , Profile Data has fetched for ${username}`
       
      )
    } catch (error) {
      toast(`Failed to fetch profile data ${error}`,{
         description:"outline",
      })
      console.error(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
       <Card className="mb-4">
        <CardHeader>
          <CardTitle>GitHub Profile Analyzer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            < Input placeholder='hello'
             
               value={username}
               onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && analyzeProfile()}
              />
               <Button onClick={analyzeProfile} disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze Profile'}
            </Button>
          </div>
        </CardContent>
      </Card>
      {user && (
        <div className="space-y-6">
          <GithubCard user={user} />

          <div className="grid gap-6 md:grid-cols-2 w-96 md:w-full mx-auto">
            <LanguageChart data={languageData} />
            <ActivityCalender username={username} />
          </div>

          <ReposList repos={repos} />
        </div>
      )}
         <Toaster />
      {/* <Button>Click me</Button> */}
    </div>
   
  );
}

export default Home;
