import Header from '../components/Header';
import { Flex, Box } from '@chakra-ui/react';
import PhotoIcon from '../svgs/PhotoIcon';
import useFetch from '../hooks/useFetch.hook'; //add

//add
interface IPhoto {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}

const Photos = () => {
	//add
	const [responses, isError, isLoading] = useFetch<IPhoto>('photos');
	if (isLoading) {
		<Box
			mt='1'
			fontWeight='bold'
			fontSize='xl'
			as='h6'
			isTruncated
			color='teal.400'
		>
			Loading Albums......
		</Box>;
	}
	return (
		<div>
			<Header />
			<Box mt='20' mx='auto' width={{ sm: '100%', lg: '80%' }}>
				{isError ? (
					<Box
						mt='1'
						fontWeight='bold'
						fontSize='xl'
						as='h6'
						isTruncated
						color='red'
					>
						Oop!!! Error getting albums
					</Box>
				) : (
					//Modify this section
					responses?.map((response) => (
						<Box w='100%' borderWidth='1px' borderRadius='lg' key={response.id}>
							<Flex direction={{ lg: 'row' }}>
								<Flex
									paddingLeft='3'
									justifyContent='center'
									alignItems='center'
								>
									<PhotoIcon />
								</Flex>
								<Box p='6' w={{ sm: '100%', lg: '80%' }}>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											AlbumId:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.albumId}
										</Box>
									</Flex>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											ID:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.id}
										</Box>
									</Flex>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											Title:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.title}
										</Box>
									</Flex>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											url:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.url}
										</Box>
									</Flex>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											ThumbnailUrl:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.thumbnailUrl}
										</Box>
									</Flex>
								</Box>
							</Flex>
						</Box>
					))
				)}
			</Box>
		</div>
	);
};

export default Photos;
