/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   test.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ckrommen <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2018/03/28 13:26:31 by ckrommen          #+#    #+#             */
/*   Updated: 2018/03/28 14:56:33 by ckrommen         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <pocketsphinx.h>
#include <stdio.h>

cmd_ln_t	*init_config()
{
  	cmd_ln_t *config;

	config = cmd_ln_init(NULL, ps_args(), TRUE,
						 "-hmm", MODELDIR "/en-us/en-us",
						 "-lm", MODELDIR "/en-us/en-us.lm.bin",
						 "-dict", MODELDIR "/en-us/cmudict-en-us.dict",
						 NULL);
	return (config);
}


void		find_utter(ps_decoder_t *ps, FILE *fh)
{ 
  	int			rv;
 	size_t		nsamp;
	int16		buf[512];
	int32		score;
	char const	*hyp;

	rv = ps_start_utt(ps);
	while (!feof(fh))
	{
		nsamp = fread(buf, 2, 512, fh);
		rv = ps_process_raw(ps, buf, nsamp, FALSE, FALSE);
	}
	rv = ps_end_utt(ps);
	hyp = ps_get_hyp(ps, &score);
	printf("Recognized: %s\n", hyp);
}

int			handle_errors(FILE *fh, ps_decoder_t *ps, cmd_ln_t *config)
{
  	if (fh == NULL)
	{
		printf("Not a valid file.\n");
	 	return (0);
	}
	if (ps == NULL)
	{
		printf("Failed to create recognizer program.\n");
		return (0);
	}
	if (config == NULL)
	{
		printf("Unsuccessfully created config object.\n");
		return (0);
	}
	return (1);
}

int main(int argc, char **argv)
{
  	ps_decoder_t	*ps;
	cmd_ln_t		*config;
	FILE			*fh;
	
	if (argc == 2)
	{
		config = init_config();
		ps = ps_init(config);
		fh = fopen(argv[1], "rb");
		if (!handle_errors(fh, ps, config))
			return (-1);
		find_utter(ps, fh);
		fclose(fh);
		ps_free(ps);
		cmd_ln_free_r(config);
	}
	else
		printf("Usage: ./kift test.raw\n");
    return 0;
}
