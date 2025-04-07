import { GitHubRepo } from './Home'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table'
import { StarIcon, GitForkIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface RepoListProps {
  repos: GitHubRepo[]
}

export default function RepoList({ repos }:RepoListProps) {
  const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Repositories</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Stars</TableHead>
              <TableHead>Forks</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedRepos.slice(0, 10).map((repo) => (
              <TableRow key={repo.name}>
                <TableCell className="font-medium">{repo.name}</TableCell>
                <TableCell>
                  {repo.language ? (
                    <Badge variant="secondary">{repo.language}</Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4" />
                    {repo.stargazers_count}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <GitForkIcon className="h-4 w-4" />
                    {repo.forks_count}
                  </div>
                </TableCell>
                <TableCell>
                  <Button asChild variant="outline" size="sm">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}