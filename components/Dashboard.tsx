'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AudioDataOverview from "./dashboard/AudioDataOverview"
import KeywordAnalysis from "./dashboard/KeywordAnalysis"
import FewShotLearning from "./dashboard/FewShotLearning"
import UserInteraction from "./dashboard/UserInteraction"

export default function Dashboard() {
    return (
        <Tabs defaultValue="overview" className="w-full">
            <TabsList>
                <TabsTrigger value="overview">Audio Data Overview</TabsTrigger>
                <TabsTrigger value="keywords">Keyword Analysis</TabsTrigger>
                <TabsTrigger value="fewshot">Few-Shot Learning</TabsTrigger>
                <TabsTrigger value="interaction">User Interaction</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <AudioDataOverview />
            </TabsContent>
            <TabsContent value="keywords">
                <KeywordAnalysis />
            </TabsContent>
            <TabsContent value="fewshot">
                <FewShotLearning />
            </TabsContent>
            <TabsContent value="interaction">
                <UserInteraction />
            </TabsContent>
        </Tabs>
    )
}