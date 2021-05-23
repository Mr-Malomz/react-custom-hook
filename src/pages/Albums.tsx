import Header from '../components/Header';
import { Flex, Box } from '@chakra-ui/react';
import AlbumIcon from '../svgs/AlbumIcon';
import useFetch from '../hooks/useFetch.hook'; //add

//add
interface IAlbum {
	userId: number;
	id: number;
	title: string;
}

const Albums = () => {
	//add
	const [responses, isError, isLoading] = useFetch<IAlbum>('albums');
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
									<AlbumIcon />
								</Flex>
								<Box p='6' w={{ sm: '100%', lg: '80%' }}>
									<Flex marginBottom='4'>
										<Box mt='1' as='p' marginRight='2.5'>
											UserId:
										</Box>
										<Box mt='1' as='p' fontWeight='bold'>
											{response.userId}
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
								</Box>
							</Flex>
						</Box>
					))
				)}
			</Box>
		</div>
	);
};

export default Albums;
