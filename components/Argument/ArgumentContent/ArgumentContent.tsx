import { useDisclosure } from "@chakra-ui/hooks"
import { Box, Link, Text } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/modal"
import { useTheme } from "@chakra-ui/system"
import { ContentfulImage } from "@constants"
import { createTransition, fade } from "@utils"
import NextImage from "next/image"

type ArgumentContentProps = (
	| {
			text: string
			image?: never
			blurDataURL?: never
	  }
	| { text?: never; image: ContentfulImage; blurDataURL: string }
) & {
	sourceNum: number
	sourceInfo?: string
}

const ArgumentContent: React.FC<ArgumentContentProps> = ({
	image,
	sourceNum,
	sourceInfo,
	text,
	blurDataURL,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const theme = useTheme()

	return (
		<>
			<Box
				onClick={image ? onOpen : () => {}}
				cursor={image ? "zoom-in" : "default"}
				pt={6}
				px={6}
				pb={4}
				borderRadius="lg"
				mb={5}
				bg={fade(theme.colors.gray[800], 0.35)}
				opacity={0.75}
				transition={createTransition(["background", "opacity"])}
				_hover={{
					opacity: 1,
				}}
			>
				{image ? (
					<Box w="full">
						<NextImage
							src={`https:${image.fields.file.url}`}
							width={image.fields.file.details.image.width}
							height={image.fields.file.details.image.height}
							placeholder="blur"
							blurDataURL={blurDataURL}
						/>
					</Box>
				) : (
					<Text>{`"${text}"`}</Text>
				)}
				<Box textAlign="right">
					<Link
						href="#sources"
						fontWeight={700}
						fontSize={"2xl"}
						color="gray.600"
						fontStyle="italic"
						textDecoration="none !important"
						transition={createTransition("color")}
						_hover={{ color: "white" }}
						_focus={{ outline: "none" }}
					>
						{sourceNum}
					</Link>
					{sourceInfo && (
						<Text
							fontWeight={600}
							fontSize="sm"
							fontStyle="italic"
							color="gray.600"
						>
							{sourceInfo}
						</Text>
					)}
				</Box>
			</Box>
			{image && (
				<Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
					<ModalOverlay />
					<ModalContent bg="transparent" p={{ base: 3, sm: 0 }}>
						<ModalBody bg="gray.800" p={4} borderRadius="md">
							<Box
								w="full"
								lineHeight={0.9}
								overflow="hidden"
								borderRadius="lg"
							>
								<NextImage
									src={`https:${image.fields.file.url}`}
									width={image.fields.file.details.image.width}
									height={image.fields.file.details.image.height}
									placeholder="blur"
									blurDataURL={blurDataURL}
								/>
							</Box>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</>
	)
}

export default ArgumentContent
