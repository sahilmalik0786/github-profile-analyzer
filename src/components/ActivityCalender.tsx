import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
// import { useTheme } from '@/components/theme-provider'
import axios from 'axios'


interface ActivityCalendarProps {
  username: string
}

interface ContributionDay {
  date: string
  count: number
  level: number
}

export default function ActivityCalendar({ username }: ActivityCalendarProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const  theme  = 'light'
  const [contributions, setContributions] = useState<ContributionDay[]>([])

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const currentYear = new Date().getFullYear()
        const response = await axios.get(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`
        )
        setContributions(response.data.contributions)
      } catch (err) {
        setError(true)
        
      } finally {
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contribution Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[200px] w-full" />
        </CardContent>
       
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Contribution Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-[200px] items-center justify-center text-muted-foreground">
            Failed to load activity datg
          </div>
        </CardContent>
      
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contribution Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          {/* Render your own calendar visualization using the contributions data */}
          <div className="grid grid-flow-row-dense grid-cols-7 gap-1 max-h-96 overflow-scroll overflow-x-hidden">
            {contributions.map((day, index) => (
              <div
                key={index}
                className="h-4 w-4 rounded-sm"
                style={{
                  backgroundColor: getColorForLevel(day.level, theme),
                }}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
     
    </Card>
   
  )
}

function getColorForLevel(level: number, theme: string): string {
  const colors = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }
  return colors[theme as keyof typeof colors][level]
}