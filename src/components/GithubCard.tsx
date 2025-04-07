import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import  {GitHubUser}  from './Home'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface GitHubStatsCardProps {
  user:  GitHubUser ;
}

export default function GitHubStatsCard({ user }:GitHubStatsCardProps) {
  const joinDate = new Date(user.created_at).toLocaleDateString()
  const yearsActive = new Date().getFullYear() - new Date(user.created_at).getFullYear()
  console.log(user)
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.avatar_url} />
          <AvatarFallback>{user.login.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{user.name || user.login}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.bio || 'No bio available'}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1 text-center">
            <p className="text-2xl font-bold">{user.public_repos}</p>
            <p className="text-sm text-muted-foreground">Repositories</p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-2xl font-bold">{user.followers}</p>
            <p className="text-sm text-muted-foreground">Followers</p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-2xl font-bold">{user.following}</p>
            <p className="text-sm text-muted-foreground">Following</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline">Joined: {joinDate}</Badge>
          <Badge variant="outline">{yearsActive} years active</Badge>
        </div>
      </CardContent>
    </Card>
  )
}